using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OTF_backend.Models.Outbound.DeliveryRows;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DeliveryRowController : ControllerBase
    {
        private readonly IDeliveryRowsRepository _deliveryRowsRepository;
        public DeliveryRowController(IDeliveryRowsRepository deliveryRowsRepository)
        {
            _deliveryRowsRepository = deliveryRowsRepository;
        }

        [HttpGet("{deliveryId}")]
        public async Task<ActionResult<DeliveryRows[]>> Get(int deliveryId)
        {
            try
            {
                var results = await _deliveryRowsRepository.GetDeliveryRowAsync(deliveryId);

                return results;
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<DeliveryRows>> Post(DeliveryRows deliveryrow)
        {
            try
            {
                _deliveryRowsRepository.CreateDeliveryRow(deliveryrow);

                return Ok(new
                {
                    Orderrow = "Orderrad tillagd!"
                });
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }
    }
}
