from rest_framework import serializers
from rest_framework.fields import ReadOnlyField
from .models import post,categories
from django.utils import timezone
from django.contrib.auth.models import User

class postserializer(serializers.ModelSerializer):
    
    class Meta:
        model = post
        fields =['id','category','title', 'content','author','date_posted']
    author=serializers.SerializerMethodField('get_author_name')
    category=serializers.SerializerMethodField('get_category_name')
    date_posted = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    def get_author_name(self,obj):
        return obj.author.username
    def get_category_name(self,obj):
        return obj.category.categories

class postserializer1(serializers.ModelSerializer):
    
    class Meta:
        model = post
        fields =['id','category','title', 'content','author','date_posted']

    

class Loginserializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['username','password']


class categoryserializer1(serializers.ModelSerializer):
    
    class Meta:
        model = categories
        fields =['id','categories']