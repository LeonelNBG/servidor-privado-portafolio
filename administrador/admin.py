from django.contrib import admin

from .models import posteo, chat, comunicado

admin.site.register(posteo)
admin.site.register(chat)
admin.site.register(comunicado)

