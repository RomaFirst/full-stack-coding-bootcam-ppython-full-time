from os import name
from django.urls import path
from pdf.views import index, formulaire, verification, generer, download

urlpatterns = [
    path('', index, name="acceuil"),
    path('creercv', formulaire, name="creer"),
    path('verification', verification, name="verification"),
    path('<int:id>', generer, name="generer"),
    path('download', download, name="download")
]