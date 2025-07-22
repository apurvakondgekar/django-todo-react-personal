
# backend/urls.py

from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from todo import views                            # add this
from django.http import HttpResponse

        
router = routers.DefaultRouter()                      # add this
router.register(r'todo', views.TodoView, 'todo')     # add this
        
urlpatterns = [
    path('', lambda request: HttpResponse("API is running"), name='home'),  # add this
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls))                # add this
]