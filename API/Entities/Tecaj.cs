namespace API.Entities
{
    public class Tecaj
    {
        public int Id { get; set; }
        public required string Naziv { get; set; }
        public required string Trajanje { get; set; }
        public decimal Cijena { get; set; }
    }
}
