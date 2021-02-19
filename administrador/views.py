from datetime import date

from django.shortcuts import render

from django.http import HttpResponse

from django.template import Context, loader

from administrador.models import posteo, chat, comunicado

def index(request):

    info = posteo.objects.all()

    return render(request, "../templates/index.html", {'datos':info})

def comunidad(request):

    avisos = comunicado.objects.all()

    return render(request, "../templates/comunidad.html", {"comunicados":avisos})

def foro(request):

    comentarios = chat.objects.all()

    return render(request, "../templates/foro.html", {'comentarios':comentarios})

def enviar_mensaje_foro(request):

    comentarios = chat.objects.all()

    fecha = date.today()

    contenido = request.POST["mensaje"]
    autor = request.POST["autor"]

    if (len(contenido) < 160 and len(autor) < 40 and contenido != "" and contenido != ""):

        comentario = chat()

        comentario.contenido = contenido
        comentario.autor = autor
        comentario.fecha = fecha

        comentario.save()

    return render(request, "../templates/foro.html", {'comentarios':comentarios})