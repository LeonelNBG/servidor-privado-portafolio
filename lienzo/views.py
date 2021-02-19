from datetime import date

from django.shortcuts import render

from django.http import HttpResponse

from django.template import Context, loader

def lienzo(request):

    return render(request, "lienzo_interactivo.html")
