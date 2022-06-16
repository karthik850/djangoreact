from django.http import response
from django.shortcuts import render,HttpResponse
from django.contrib.auth.decorators import login_required
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import post,categories
from .serializers import postserializer,postserializer1,Loginserializer,categoryserializer1
from django.utils import timezone
from django.contrib.auth.models import User

from django.http import request as drequest
from django.contrib.auth import authenticate,login

from rest_framework.permissions import IsAuthenticated
# Create your views here.

@login_required
def home(request):
    return HttpResponse("<h1>dgsagh</h1>")

def apioverview(request):
    api_urls={
        "List":"/post-list/",
		"Detail View":"/post-detail/<str:pk>/",
		"Create":"/post-create/",
		"Update":"/post-update/<str:pk>/",
		"Delete":"/post-delete/<str:pk>/",
    }
    return Response(api_urls)


@api_view(['GET'])
def postList(request):
	permission_classes = [IsAuthenticated, ]
	posts = post.objects.all().order_by('-id')
	serializer = postserializer(posts, many=True)
	return Response(serializer.data)


@api_view(['GET'])
def postDetail(request, pk):
	tasks = post.objects.get(id=pk)
	serializer = postserializer(tasks, many=False)
	return Response(serializer.data)


@api_view(['POST'])
def postCreate(request):
	request.data['category']=categories.objects.get(id=request.data['category']).id
	request.data['author']=request.user.id
	request.data['date_posted']=timezone.now()
	serializer = postserializer1(data=request.data)
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['POST'])
def postUpdate(request, pk):
	task = post.objects.get(id=pk)
	request.data['author']=task.author
	request.data['date_posted']=task.date_posted
	serializer = postserializer(instance=task, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def postDelete(request, pk):
	task = post.objects.get(id=pk)
	task.delete()

	return Response('Item succsesfully delete!')


@api_view(['GET'])
def mypost(request):
	posts = post.objects.filter(author=request.user.id).order_by('-id')
	serializer = postserializer(posts, many=True)
	return Response(serializer.data)


@api_view(['GET'])
def usersearch(request, name):
	try:
		user= User.objects.get(username=name)
		posts=post.objects.filter(author=user.id).order_by('-id')
	except:
		posts=None
	serializer = postserializer(posts, many=True)
	return Response(serializer.data)


@api_view(['GET'])
def user(request):
	user=request.user
	return Response({'username':user.username,'email':user.email})

@api_view(['POST'])
def loginview(request):
	user=authenticate(request,username=request.data['username'],password=request.data['password'])
	#print(user,request.data['username'],request.data['password'])
	if user:
		print(user,request.data['username'],request.data['password'])
		login(request._request,user)
		return Response({'ok':'True'})
	else:
		return Response({'ok':'False'})

@api_view(['GET'])
def category_view(request):
	category_list=categories.objects.all()
	serializer=categoryserializer1(category_list,many=True)
	return Response(serializer.data)
@api_view(['GET'])
def category_post_view(request,pk):
	id1=categories.objects.get(categories=pk).id
	category_list=post.objects.filter(category=id1)
	serializer=postserializer(category_list,many=True)
	return Response(serializer.data)