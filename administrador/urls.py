from django.urls import path

from . import views

#from django.conf import settings
#from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='index'),
    path('index', views.index, name='index'),
    path('comunidad', views.comunidad, name='comunidad'),
    path('foro', views.foro, name='foro'),
    path('enviar_mensaje_foro', views.enviar_mensaje_foro, name='enviar_mensaje_foro'),
]

#urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
#urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)