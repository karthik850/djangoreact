from django.contrib import admin
from django.urls import path,include
from django.contrib.auth import views as auth_views
from user import views as user_views
from django.views.generic import TemplateView

urlpatterns = [
    path('api/',include("blogapi1.urls")),
    path('admin/', admin.site.urls),
    path('login/', auth_views.LoginView.as_view(template_name="user/login.html"), name="login"),
    path('logout/', auth_views.LogoutView.as_view(template_name="index.html"), name="logout"),
    path('register/', user_views.register, name="register"),
    path('',TemplateView.as_view(template_name="index.html"), name="home"),
    path('postupdate/<str:pk>/',TemplateView.as_view(template_name="index.html"), name="postupdate"),
    path('postdetail/<str:pk>/',TemplateView.as_view(template_name="index.html"), name="postdetail"),
    path('postupdate/<str:pk>/',TemplateView.as_view(template_name="index.html"), name="postdupdate"),
    path('user/<str:name>/',TemplateView.as_view(template_name="index.html"), name="usersearch"),
    path('create/',TemplateView.as_view(template_name="index.html"), name="create"),
    path('myposts/',TemplateView.as_view(template_name="index.html"), name="myposts"),
    path('category/<str:pk>/',TemplateView.as_view(template_name="index.html"), name="category_post"),
    #path('login',TemplateView.as_view(template_name="index.html"), name="login"),
    
]