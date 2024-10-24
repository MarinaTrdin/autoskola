using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles() 
        {
            CreateMap<Tecaj, TecajDto>();
            CreateMap<TecajDto, Tecaj>();
            CreateMap<TecajInsertDto, Tecaj>();
            CreateMap<TecajUpdateDto, Tecaj>();
            CreateMap<Kandidat, KandidatDto>();
            CreateMap<KandidatDto, Kandidat>();
            CreateMap<KandidatInsertDto, Kandidat>();
            CreateMap<KandidatUpdateDto, Kandidat>();
        }

        
    }
}
