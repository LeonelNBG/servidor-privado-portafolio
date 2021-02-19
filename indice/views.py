from datetime import date

from django.shortcuts import render

from django.http import HttpResponse

from django.template import Context, loader

def indice(request):

    return render(request, "indice.html")
