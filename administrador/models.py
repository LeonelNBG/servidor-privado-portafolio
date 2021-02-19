import datetime

from django.utils import timezone

from django.db import models

class posteo(models.Model):

    ID = models.AutoField(primary_key=True)

    fecha = models.DateTimeField("feha de publicación")

    titulo = models.CharField("Titulo para el post", max_length=40)

    contenido = models.CharField("contenido del post", max_length=4000)

    img = models.ImageField("Imagen opcional", upload_to="", blank=True)

    titulo_nota = models.CharField("Titulo para la nota (opcional, aparecerá al lado del post)", max_length=30, blank=True)

    nota =  models.CharField("contenido de la nota (opcional, aparece al lado del post)", max_length=150, blank=True)

    autor = models.CharField("autor del post", max_length=40)

class chat(models.Model):

    ID = models.AutoField(primary_key=True)

    fecha = models.DateTimeField("feha de publicación")

    contenido = models.CharField("contenido del post", max_length=160)

    autor = models.CharField("autor del post", max_length=40)
    
class comunicado(models.Model):

    ID = models.AutoField(primary_key=True)

    fecha = models.DateTimeField("feha del comunicado")

    titulo = models.CharField("Titulo para el comunicado", max_length=40)

    contenido = models.CharField("contenido del comunicado", max_length=4000)

    img = models.ImageField("Imagen opcional", upload_to="", blank=True)

    titulo_nota = models.CharField("Titulo para la nota (opcional, aparecerá al lado del comunicado)", max_length=30, blank=True)

    nota =  models.CharField("contenido de la nota (opcional, aparece al lado del comunicado)", max_length=150, blank=True)

    autor = models.CharField("autor del comunicado", max_length=40)