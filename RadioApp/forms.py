from django import forms

class addPedido(forms.Form):
    imageURL = forms.CharField(label='Url', max_length=500)
    name = forms.CharField(label='Song', max_length=500)
