from django.urls import path

from lienzo import views

urlpatterns = [
    path('', views.lienzo, name='lienzo'),
]