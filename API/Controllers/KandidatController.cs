using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KandidatController(DataContext context, IMapper mapper) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<KandidatDto>>> GetKandidate()
        {
            try
            {

                var kandidati = await context.Kandidati.Include(k => k.Tecaj).ToListAsync();
                if (kandidati == null) return NotFound();

                var kandidatiToReturn = mapper.Map<IEnumerable<KandidatDto>>(kandidati);

                return Ok(kandidatiToReturn);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                                 ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<KandidatDto>> GetKandidat(int id)
        {
            try
            {

                var kandidat = await context.Kandidati.Include(k => k.Tecaj).FirstOrDefaultAsync(k => k.Id == id);

                if(kandidat == null) return NotFound();

                return mapper.Map<KandidatDto>(kandidat);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                               ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Kandidat>> Insert(KandidatInsertDto kandidatInsertDto)
        {
            try
            {
                var kandidat = mapper.Map<Kandidat>(kandidatInsertDto);

                if(kandidatInsertDto.TecajId != 0)
                {
                    var tecaj = await context.Tecajevi.FindAsync(kandidatInsertDto.TecajId);
                    if(tecaj == null) return NotFound("Tečaj nije pronađen");

                    kandidat.Tecaj = tecaj;
                }

                context.Kandidati.Add(kandidat);
                await context.SaveChangesAsync();

                return Ok(kandidat);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                         ex.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteKandidat(int id)
        {
            try
            {
                var kandidat = await context.Kandidati.FindAsync(id);
                if(kandidat != null)
                {
                    context.Kandidati.Remove(kandidat);
                    context.SaveChanges();
                }
                else
                {
                    return NotFound();
                }

                return Ok();

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateKandidat(int id, KandidatUpdateDto kandidatUpdateDto)
        {
            try
            {
                var kandidat = await context.Kandidati.Include(k => k.Tecaj).FirstOrDefaultAsync(k => k.Id == id);
                if (kandidat == null) return NotFound();

                mapper.Map(kandidatUpdateDto, kandidat);

                if(kandidatUpdateDto.TecajId != 0)
                {
                    kandidat.Tecaj = await context.Tecajevi.FindAsync(kandidatUpdateDto.TecajId);
                    if(kandidat.Tecaj == null)
                    {
                        return NotFound("Tečaj nije pronađen");
                    }
                }

                context.Kandidati.Update(kandidat);

                await context.SaveChangesAsync();

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }
    }
}
