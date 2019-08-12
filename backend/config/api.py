from rest_framework import routers
from apps.users.views import UserViewSet
from reviews.views import ReviewViewSet

# Settings
api = routers.DefaultRouter()
api.trailing_slash = '/?'

# Users API
api.register(r'users', UserViewSet)
api.register(r'reviews', ReviewViewSet)
