from django.db import models
from django.utils import timezone

class Pedido(models.Model):
    name = models.CharField(max_length=200)
    imageURL = models.CharField(max_length=500)
    fecha = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name