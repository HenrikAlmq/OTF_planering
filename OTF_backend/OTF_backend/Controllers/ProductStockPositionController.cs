using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OTF_backend.Models;
using OTF_backend.Models.Stock;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductStockPositionController : ControllerBase
    {
        private readonly IProductStockPositionRepository _productStockPosition;

        public ProductStockPositionController(IProductStockPositionRepository productStockPosition)
        {
            _productStockPosition = productStockPosition;
        }

        [HttpPost("create")]
        public async Task<ActionResult<ProductStockPosition>> Post(ProductStockPosition productStockPosition)
        {
            try
            {
                _productStockPosition.CreateProductStock(productStockPosition);

                return Ok(new
                {
                    ProductStockPositionId = productStockPosition.ProductStockPositionId,
                    IncomingDeliveryRowId = productStockPosition.IncomingDeliveryRowId,
                    IncomingDeliveryId = productStockPosition.IncomingDeliveryId,
                    DeliveryId = productStockPosition.DeliveryId,
                    Quantity = productStockPosition.Quantity,
                    InboundDate = productStockPosition.InboundDate,
                    PickedDate = productStockPosition.PickedDate,
                    Picked = productStockPosition.Picked,
                    StockLocationId = productStockPosition.StockLocationId,
                    Location = productStockPosition.Location,
                    User = productStockPosition.User
                });
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpGet("{deliveryId}")]
        public async Task<ActionResult<ProductStockPosition[]>> GetDeliveryRowsById(int deliveryId)
        {
            try
            {
                var results = await _productStockPosition.GetDeliveryRowsByDeliveryId(deliveryId);

                return results;
            }
            catch (Exception)
            {

                return null;
            }
        }

        [HttpGet]
        public IEnumerable<ProductStock> Get()
        {
            try
            {
                return _productStockPosition.GetStockPerLocation();

            }
            catch (Exception e)
            {

                return null;
            }
        }
    }
}
