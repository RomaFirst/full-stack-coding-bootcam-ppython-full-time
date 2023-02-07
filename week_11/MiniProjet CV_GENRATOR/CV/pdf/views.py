from django.http import response
from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from .models import Profile
import pdfkit
from django.template.loader import get_template
import io

# Create your views here.
def index(request):
    return render(request, 'pdf/resume.html')

def formulaire(request):
    if request.method == "POST":
        name = request.POST.get("name")       
        email = request.POST.get("email")    
        phone = request.POST.get("phone")    
        address = request.POST.get("address")    
        competence = request.POST.get("competence")
        langue = request.POST.get("langue")
        interet = request.POST.get("interet")    
        objectif = request.POST.get("objectif")  
        experience = request.POST.get("experience")    
        education = request.POST.get("education")    
        projet = request.POST.get("projet")
        donnees = Profile(name=name, email=email, phone=phone, address=address, competance=competence, experience=experience, objectif=objectif, Projet=projet, interet=interet, langue=langue, education=education) 
        donnees.save()
        return redirect('verification')
    return render(request, 'pdf/form.html')

def verification(request):
    profiles = Profile.objects.all()[:1]
    for profile in profiles:
        name=profile.name
        phone=profile.phone
        email =profile.email
        address =profile.address
        com = profile.competance
        langue = profile.langue
        interet = profile.interet
        exp = profile.experience
        objectif = profile.objectif 
        education = profile.education 
        project = profile.Projet
    return render(request, "pdf/verification.html", {'address':address, 'name':name, 'email':email, 'phone':phone, 'com':com, 'interet':interet, 'langue':langue, 'experience':exp, 'objectif':objectif, 'education': education, 'project':project })

def generer(request, id):
    profile = Profile.objects.get(pk=id)
    name=profile.name
    phone=profile.phone
    email =profile.email
    address =profile.address
    com = profile.competance
    langue = profile.langue
    interet = profile.interet
    exp = profile.experience
    objectif = profile.objectif 
    education = profile.education 
    project = profile.Projet

    template = get_template('pdf/generator.html')
    context = {'address':address, 'name':name, 'email':email, 'phone':phone, 'com':com, 'interet':interet, 'langue':langue, 'experience':exp, 'objectif':objectif, 'education': education, 'project':project }
    html = template.render(context)
    options = {
        'page-size':'Letter',
        'encoding':'UTF-8',
    }
    pdf = pdfkit.from_string(html, False, options)

    reponse = HttpResponse(pdf, content_type='application/pdf')
    reponse['Content-Disposition']="attachement"
    return reponse

def download(request):
    profile = Profile.objects.all()
    return render(request, 'pdf/download.html', {'profile':profile}) 


