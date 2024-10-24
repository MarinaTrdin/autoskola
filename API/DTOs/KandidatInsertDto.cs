using API.Entities;

namespace API.DTOs
{
    public class KandidatInsertDto
    {
        public required string Ime { get; set; }
        public required string Prezime { get; set; }
        public required string Oib { get; set; }
        public required string Telefon { get; set; }
        public required int TecajId { get; set; } // FK
    }
}
