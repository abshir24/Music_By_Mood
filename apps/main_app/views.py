from django.shortcuts import render,redirect

# Create your views here.

def home(request):
    return render(request,"main_app/index.html")

def test(request):
    print "print",request.body

    return redirect("main:home")