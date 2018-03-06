This will generate a set of models that are able to reference each other.

Every model must have a model config. A model config will look something like
the following:

```javascript
{ name: 'VisitorJoin'
, type: 'visitor_join'
, includeType: true
, props: [
    Prop.date().path('created_at')
  , Prop.ref('Visitor').path('visitor')
  ]
}
```
