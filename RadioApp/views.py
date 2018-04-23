from django.shortcuts import render

from django.http import HttpResponse
from django.http import JsonResponse

from django.template import loader

from RadioApp.models import Pedido
from RadioApp.forms import addPedido


def index(request):
    latest_pedido_list = Pedido.objects.order_by('-fecha')[:20]
    template = loader.get_template('index.html')
    context = {
        'latest_pedido_list': latest_pedido_list,
    }
    return HttpResponse(template.render(context, request))

def get_pedido(request):
    # if this is a POST request we need to process the form data
    if request.POST:
       # get POST data
       url = request.POST['url']
       name = request.POST['name']

       # create new Post
       pedido = Pedido(name=name, imageURL=url)
       pedido.save()

       return HttpResponse('<p>here</p>')

def delete_pedido(request):
    # if this is a POST request we need to process the form data
    if request.POST:
       # get POST data
       id = request.POST['id']

       # create new Post
       Pedido.objects.get(pk=id).delete()

       return HttpResponse('<p>here</p>')