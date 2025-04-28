from django.db import models

class YouTubeVideo(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    youtube_link = models.URLField()
    thumbnail = models.URLField()
    uploaded_date = models.DateTimeField(auto_now_add=True)
    view_count = models.IntegerField(default=0)
    duration_seconds = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.title
