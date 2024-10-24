namespace API.Entities
{
    public class Kandidat
    {
        public int Id { get; set; }
        public required string Ime { get; set; }
        public required string Prezime { get; set; }
        public required string Oib { get; set; }
        public required string Telefon { get; set; }
        public required Tecaj Tecaj { get; set; }
    }
}
