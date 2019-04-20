function extend(Child, Base) {
  Child.prototype = Object.create(Base.prototype);
  Child.prototype.constructor = Child;
}