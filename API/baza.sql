USE [Autoskola]
GO
/****** Object:  Table [dbo].[Kandidati]    Script Date: 19/10/2024 07:15:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Kandidati](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Ime] [nvarchar](max) NOT NULL,
	[Prezime] [nvarchar](max) NOT NULL,
	[Oib] [nvarchar](max) NOT NULL,
	[Telefon] [nvarchar](max) NOT NULL,
	[TecajId] [int] NOT NULL,
 CONSTRAINT [PK_Kandidati] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tecajevi]    Script Date: 19/10/2024 07:15:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tecajevi](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Naziv] [nvarchar](max) NOT NULL,
	[Trajanje] [nvarchar](max) NOT NULL,
	[Cijena] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_Tecajevi] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Kandidati]  WITH CHECK ADD  CONSTRAINT [FK_Kandidati_Tecajevi_TecajId] FOREIGN KEY([TecajId])
REFERENCES [dbo].[Tecajevi] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Kandidati] CHECK CONSTRAINT [FK_Kandidati_Tecajevi_TecajId]
GO
