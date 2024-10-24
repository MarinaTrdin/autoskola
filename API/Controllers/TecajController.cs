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
    public class TecajController(DataContext context, IMapper mapper) : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TecajDto>>> GetTecajeve()
        {
            try
            {
                var tecajevi = await context.Tecajevi.ToListAsync();
                if(tecajevi == null) return NotFound();

                var tecajeviToReturn = mapper.Map<IEnumerable<TecajDto>>(tecajevi);
                return Ok(tecajeviToReturn);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                               ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TecajDto>> GetTecaj(int id)
        {
            try
            {
                var tecaj = await context.Tecajevi.FirstOrDefaultAsync(t => t.Id == id);

                if(tecaj == null) return NotFound();

                return mapper.Map<TecajDto>(tecaj);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                               ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Tecaj>> Insert(TecajInsertDto tecajInsertDto)
        {
            try
            {
                var tecaj = mapper.Map<Tecaj>(tecajInsertDto);
                context.Tecajevi.Add(tecaj);
                await context.SaveChangesAsync();

                return Ok(tecaj);
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                        ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTecaj(int id)
        {
            try
            {
                var tecaj = await context.Tecajevi.FindAsync(id);
                if (tecaj == null) return NotFound();

                context.Tecajevi.Remove(tecaj);
                context.SaveChanges();

                return Ok();

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateTecaj(int id, TecajUpdateDto tecajUpdateDto)
        {
            try
            {
                var tecaj = await context.Tecajevi.FirstOrDefaultAsync(t => t.Id == id);
                if(tecaj == null) return NotFound();

                mapper.Map(tecajUpdateDto, tecaj);

                context.Tecajevi.Update(tecaj);
               
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
