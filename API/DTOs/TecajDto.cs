namespace API.DTOs
{
    public class TecajDto
    {
        public int Id { get; set; }
        public required string Naziv { get; set; }
        public required string Trajanje { get; set; }
        public decimal Cijena { get; set; }
    }
}
