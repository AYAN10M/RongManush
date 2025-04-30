from rest_framework import serializers
from videos.models import YouTubeVideo
from products.models import Product

# Serializers for the YouTubeVideo model 
class YouTubeVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = YouTubeVideo
        fields = '__all__'


# Serializers for the Product model
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
