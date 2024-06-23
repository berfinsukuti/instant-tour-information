from rest_framework import serializers
from .models import Tur

class TurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tur
        fields = '__all__'
