

# Create your models here.
from django.db import models

class Tur(models.Model):
    tur_adi = models.CharField(max_length=200)
    sehir = models.CharField(max_length=200)
    baslangic_tarihi = models.DateField()
    bitis_tarihi = models.DateField()
    tur_rehberi = models.CharField(max_length=100)
    kontenjan = models.IntegerField()
    tur_suresi = models.IntegerField()

    def __str__(self):
        return self.tur_adi
