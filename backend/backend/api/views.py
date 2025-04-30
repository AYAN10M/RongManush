from rest_framework import viewsets
from videos.models import YouTubeVideo
from . serializers import YouTubeVideoSerializer
from products.models import Product
from . serializers import ProductSerializer

class YoutubeVideoViewSet(viewsets.ModelViewSet):
    queryset = YouTubeVideo.objects.all()
    serializer_class = YouTubeVideoSerializer
    lookup_field = 'pk'


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-created_at')
    serializer_class = ProductSerializer
