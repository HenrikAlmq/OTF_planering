using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OTF_backend.Models.Outbound;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet("{productId}")]
        public async Task<ActionResult<Product>> Get(int productId)
        {
            try
            {
                var results = await _productRepository.GetProductAsync(productId);

                if (results == null)
                {
                    return NotFound();
                }

                return results;
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpGet]
        public async Task<ActionResult<Product[]>> Get()
        {
            try
            {
                var results = await _productRepository.GetAllProductsAsync();

                return results;
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<Product>> Put(Product model)
        {
            try
            {
                var existing = await _productRepository.GetProductByTitleAsync(model.ArticleNumber);
                if (existing != null)
                {
                    return BadRequest("Product already exists");
                }

                _productRepository.CreateProduct(model);

                return Ok(new
                {
                    ArticleNumber = model.ArticleNumber,
                    ArticleDescription = model.ArticleDescription,
                    Barcode = model.Barcode,
                    Volume = model.Volume,
                    Weight = model.Weight
                });
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }
        [HttpDelete("{productId:int}")]
        public async Task<ActionResult<Product>> DeleteProduct(int productId)
        {
            try
            {
                var productToDelete = await _productRepository.GetProductAsync(productId);

                if (productToDelete == null)
                {
                    return NotFound($"Produkt med ID: {productId} finns inte");
                }

                return await _productRepository.DeleteProduct(productId);
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Error deleting data");
            }
        }
    }
}
