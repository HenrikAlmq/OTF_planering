using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OTF_backend.Models;
using OTF_backend.Models.Outbound.Deliveries;
using OTF_backend.Models.Stock;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DeliveryController : ControllerBase
    {
        private readonly IDeliveryRepository _deliveryRepository;
        private readonly IProductStockPositionRepository _productStockPositionRepository;

        public DeliveryController(IDeliveryRepository deliveryRepository, IProductStockPositionRepository productStockPositionRepository)
        {
            _deliveryRepository = deliveryRepository;
            _productStockPositionRepository = productStockPositionRepository;
        }

        [HttpGet("{deliveryId}")]
        public async Task<ActionResult<Delivery>> Get(int deliveryId)
        {
            try
            {
                var results = await _deliveryRepository.GetDeliveryByDeliveryId(deliveryId);

                return results;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database failure");
            }
        }

        [HttpGet]
        public async Task<ActionResult<Delivery[]>> Get()
        {
            try
            {
                var results = await _deliveryRepository.GetAllOrdersAsync();

                return results;
            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, "Database failure");
            }
        }

        

        [HttpPost("create")]
        public async Task<ActionResult<Delivery>> Put(Delivery delivery)
        {
            try
            {
                var existing = await _deliveryRepository.GetDeliveryByOrderId(delivery.OrderId);
                if (existing != null)
                {
                    return BadRequest("Order already exists with that orderId");
                }

                _deliveryRepository.CreateDelivery(delivery);

                return Ok(new
                {
                    DeliveryId = delivery.DeliveryId,
                    OrderId = delivery.OrderId,
                    DeliveryAddress = delivery.DeliveryAddress,
                    ZipCode = delivery.ZipCode,
                    PhoneNumber = delivery.PhoneNumber,
                    Email = delivery.Email
                });
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpPatch("{deliveryId}/allocate")]
        public async Task<ActionResult<bool>> AllocateOrder(int deliveryId)
        {
            try
            {
                return Ok(_deliveryRepository.AllocateDelivery(deliveryId));
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPut("{deliveryId}")]
        public ActionResult<string> UpdateOrder(UpdateOrder updateOrder)
        {
            try
            {
                _deliveryRepository.UpdateOrder(updateOrder);

                return Ok("Orderrad hanterad");
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
