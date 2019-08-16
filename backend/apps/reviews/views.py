import requests
from rest_framework import filters, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from apps.reviews.models import Review
from apps.reviews.serializers import ReviewSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    search_fields = ['^title', '^author_name']
    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer