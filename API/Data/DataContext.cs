using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Tecaj> Tecajevi {  get; set; }
        public DbSet<Kandidat> Kandidati { get; set; }
    }
}
