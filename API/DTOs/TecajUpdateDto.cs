namespace API.DTOs
{
    public class TecajUpdateDto
    {
        public required string Naziv { get; set; }
        public required string Trajanje { get; set; }
        public decimal Cijena { get; set; }
    }
}
