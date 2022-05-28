using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OTF_backend.Models.Outbound.IncomingDelivery;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IncomingDeliveryController : ControllerBase
    {
        private readonly IIncomingDeliveryRepository _incomingDeliveryRepository;

        public IncomingDeliveryController(IIncomingDeliveryRepository incomingDeliveryRepository)
        {
            _incomingDeliveryRepository = incomingDeliveryRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IncomingDelivery[]>> Get()
        {
            try
            {
                var results = await _incomingDeliveryRepository.GetAllIncomingDeliveriesAsync();

                return results;
            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, "Database failure");
            }
        }

        [HttpGet("{IncomingDeliveryId}")]
        public async Task<ActionResult<IncomingDelivery>> Get(int IncomingDeliveryId)
        {
            try
            {
                var results = await _incomingDeliveryRepository.GetIncomingDeliveryByIdAsync(IncomingDeliveryId);

                return results;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database failure");
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<IncomingDelivery>> Create(IncomingDelivery incomingDelivery)
        {
            try
            {
                var existing = await _incomingDeliveryRepository.GetIncomingDeliveryByOrderIdAsync(incomingDelivery.PurchaseOrderId);

                if (existing != null)
                {
                    return NotFound($"Order med PO-nummer:{incomingDelivery.PurchaseOrderId} existerar redan");
                }

                _incomingDeliveryRepository.CreateIncomingDelivery(incomingDelivery);

                return Ok(new
                {
                    IncomingDeliveryId = incomingDelivery.IncomingDeliveryId,
                    PurchaseOrderId = incomingDelivery.PurchaseOrderId,
                    DeliveryAddress = incomingDelivery.DeliveryAddress,
                    PhoneNumber = incomingDelivery.PhoneNumber,
                    Email = incomingDelivery.Email
                });
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
