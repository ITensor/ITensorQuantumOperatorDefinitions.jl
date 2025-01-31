module QuantumOperatorDefinitionsITensorBaseExt

using ITensorBase: ITensorBase, ITensor, Index, dag, gettag, prime
using NamedDimsArrays: dename
using QuantumOperatorDefinitions:
  QuantumOperatorDefinitions, @OpName_str, OpName, SiteType, StateName, has_fermion_string

function QuantumOperatorDefinitions.SiteType(r::Index)
  # We pass the axis of the (unnamed) Index because
  # the Index may have originated from a slice, in which
  # case the start may not be 1 (for NonContiguousIndex,
  # which we need to add support for, it may not even
  # be a unit range).
  return SiteType(
    gettag(r, "sitetype", "Qudit"); dim=Int.(length(r)), range=only(axes(dename(r)))
  )
end

# TODO: Define in terms of `OpName` directly, and define a generic
# forwarding method `has_fermion_string(n::String, t) = has_fermion_string(OpName(n), t)`.
function QuantumOperatorDefinitions.has_fermion_string(n::String, r::Index)
  return has_fermion_string(OpName(n), SiteType(r))
end

function Base.axes(::OpName, domain::Tuple{Vararg{Index}})
  return (prime.(domain)..., dag.(domain)...)
end
## function Base.axes(::OpName"SWAP", domain::Tuple{Vararg{Index}})
##   return (prime.(reverse(domain))..., dag.(domain)...)
## end

end
