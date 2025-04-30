from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from . views import ProductViewSet, YoutubeVideoViewSet


router = DefaultRouter()
router.register('videos', views.YoutubeVideoViewSet, basename='youtubevideo')
router.register('products', views.ProductViewSet, basename='product')

urlpatterns = [
    path('', include(router.urls)),
]
