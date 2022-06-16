
from django.contrib import admin
from django.contrib.auth import login
from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    
	path('overview',views.apioverview, name="overview"),
    path('post-list/', views.postList, name="post-list"),
	path('post-detail/<str:pk>/', views.postDetail, name="post-detail"),
	path('post-create/', views.postCreate, name="post-create"),
	path('post-update/<str:pk>/', views.postUpdate, name="post-update"),
	path('post-delete/<str:pk>/', views.postDelete, name="post-delete"),
	path('myposts/',views.mypost, name="myposts"),
	path('user/<str:name>/', views.usersearch, name="usersearch"),
	path('login/', views.loginview, name="login"),
	path('user/',views.user, name="user"),
	path('categories/',views.category_view, name="categories"),
	path('category/<str:pk>/', views.category_post_view, name="categories_post")
]