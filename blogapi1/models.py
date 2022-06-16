from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.

class categories(models.Model):
    categories=models.CharField(max_length=100)
    
    def __str__(self):
        return self.categories


class post(models.Model):
    category=models.ForeignKey(categories, on_delete=models.CASCADE,default=4)
    title=models.CharField(max_length=100)
    content=models.TextField()
    author=models.ForeignKey(User, on_delete=models.CASCADE)
    #likes =models.ManyToManyField(User,related_name="post_liked")
    date_posted=models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.title
    #def number_of_likes(self):
      #  return self.likes.count()

