from django.urls import path

from indice import views

urlpatterns = [
    path('', views.indice, name='indice'),
]