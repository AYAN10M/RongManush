from rest_framework import serializers
from videos.models import YouTubeVideo

# Serializers for the YouTubeVideo model 
class YouTubeVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = YouTubeVideo
        fields = '__all__'