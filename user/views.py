from django.shortcuts import render,redirect
from .forms import UserRegisterForm
from django.contrib.auth import login,logout,authenticate


def register(request):
    form =UserRegisterForm()
    if request.method == "POST":
        form=UserRegisterForm(request.POST)
        if form.is_valid():
            user=form.save()
            username=form.cleaned_data.get('username')
            login(request,user)
            return redirect('home')
    return render(request,"user/register.html",{"form":form,"title":"register"})


def login(request):
    pass