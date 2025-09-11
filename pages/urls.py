"""
URL configuration for django_payment_webhook project.
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('payment_handler.urls')),
]
