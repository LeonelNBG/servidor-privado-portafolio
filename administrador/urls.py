from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('index', views.index, name='index'),
    path('comunidad', views.comunidad, name='comunidad'),
    path('foro', views.foro, name='foro'),
    path('enviar_mensaje_foro', views.enviar_mensaje_foro, name='enviar_mensaje_foro'),
]