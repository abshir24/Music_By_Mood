from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^home$', views.home, name = 'home'),
    url(r'^test$', views.test, name = 'test')
]
