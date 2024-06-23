# from django.shortcuts import render

# # Create your views here.
# from rest_framework import viewsets
# from .models import Tur
# from .serializers import TurSerializer

# from django.http import JsonResponse

# import requests # type: ignore

# class TurViewSet(viewsets.ModelViewSet):
#     queryset = Tur.objects.all()
#     serializer_class = TurSerializer



# def tur_list(request):
#     turlar = Tur.objects.all()
#     tur_list = []
#     for tur in turlar:
#         geocode_url = f'https://nominatim.openstreetmap.org/search?q={tur.sehir}&format=json'
#         response = requests.get(geocode_url, headers={'User-Agent': 'your-app'})
#         geocode_data = response.json()
#         if geocode_data:
#             location = geocode_data[0]
#             tur_list.append({
#                 'id': tur.id,
#                 'tur_adi': tur.tur_adi,
#                 'sehir': tur.sehir,
#                 'baslangic_tarihi': tur.baslangic_tarihi,
#                 'bitis_tarihi': tur.bitis_tarihi,
#                 'coords': {
#                     'lat': float(location['lat']),
#                     'lng': float(location['lon']),
#                 }
#             })
#         else:
#             tur_list.append({
#                 'id': tur.id,
#                 'tur_adi': tur.tur_adi,
#                 'sehir': tur.sehir,
#                 'baslangic_tarihi': tur.baslangic_tarihi,
#                 'bitis_tarihi': tur.bitis_tarihi,
#                 'coords': {'lat': 0, 'lng': 0}
#             })

#     return JsonResponse(tur_list, safe=False)
from django.http import JsonResponse
from .models import Tur

def tur_list(request):
    turlar = Tur.objects.all()
    tur_list = [{
        'tur_adi': tur.tur_adi,
        'sehir': tur.sehir,
        'latitude': tur.latitude,
        'longitude': tur.longitude,
        'rehber': tur.rehber,
        'kontenjan': tur.kontenjan,
        'baslangic_tarihi': tur.baslangic_tarihi,
        'bitis_tarihi': tur.bitis_tarihi
    } for tur in turlar]
    return JsonResponse(tur_list, safe=False)

