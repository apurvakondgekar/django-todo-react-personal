
# todo/models.py
      
from django.db import models
# Create your models here.

# add this
class Todo(models.Model):
    # Explicit primary key field using BigAutoField (recommended for Django 3.2+)
    id = models.BigAutoField(primary_key=True)
    # ... your other fields ...
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    description = models.TextField(blank=True)
    # add other fields as needed
      
    def __str__(self):
        return self.title