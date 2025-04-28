from rest_framework import viewsets
from videos.models import YouTubeVideo
from .serializers import YouTubeVideoSerializer

class YoutubeVideoViewSet(viewsets.ModelViewSet):
    queryset = YouTubeVideo.objects.all()
    serializer_class = YouTubeVideoSerializer
    lookup_field = 'pk'
