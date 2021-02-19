# Generated by Django 3.0.3 on 2020-06-30 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrador', '0006_auto_20200630_1212'),
    ]

    operations = [
        migrations.AddField(
            model_name='comunicado',
            name='nota',
            field=models.CharField(blank=True, max_length=150, verbose_name='contenido de la nota (opcional, aparece al lado del comunicado)'),
        ),
        migrations.AddField(
            model_name='comunicado',
            name='titulo_nota',
            field=models.CharField(blank=True, max_length=30, verbose_name='Titulo para la nota (opcional, aparecerá al lado del comunicado)'),
        ),
        migrations.AddField(
            model_name='posteo',
            name='nota',
            field=models.CharField(blank=True, max_length=150, verbose_name='contenido de la nota (opcional, aparece al lado del post)'),
        ),
        migrations.AddField(
            model_name='posteo',
            name='titulo_nota',
            field=models.CharField(blank=True, max_length=30, verbose_name='Titulo para la nota (opcional, aparecerá al lado del post)'),
        ),
        migrations.AlterField(
            model_name='comunicado',
            name='img',
            field=models.ImageField(blank=True, upload_to='', verbose_name='Imagen opcional'),
        ),
        migrations.AlterField(
            model_name='posteo',
            name='img',
            field=models.ImageField(blank=True, upload_to='', verbose_name='Imagen opcional'),
        ),
    ]
